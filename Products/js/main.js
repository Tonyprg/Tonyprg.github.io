var table = new Array();

function tableAllPrice ()
{
  var s = 0;
  for (var i = 0; i < table.length; i++)
  {
    if (document.getElementById("checkbox" + table[i].pos).checked)
      s += Number(table[i].price.textContent);
  }

  return s;
}

function tableDelete (pos)
{
  for (var i = 0; i < table.length; i++)
  {
    if (table[i].pos == pos)
    {
      table.splice(i, 1);
      break;
    }
  }
}

function getName (tag_id)
{
  var tag = document.createElement("div");
  tag.id = "name" + tag_id;
  tag.className = "col-4 d-flex justify-content-center border border-2 border-dark";
  tag.innerHTML = "<h3>" + prompt("Введите название товара") + "</h3>";
  return tag;
}

function getPrice (tag_id)
{
  var tag = document.createElement("div");
  tag.id = "price" + tag_id;
  tag.className = "col-4 d-flex justify-content-center border border-2 border-dark";
  tag.innerHTML = "<h3>" + prompt("Введите название товара") + "</h3>";
  return tag;
}

function getCheckbox (tag_id)
{
  var tag = document.createElement("div");
  tag.id = "parent_checkbox" + tag_id;
  tag.className = "col-2 d-flex justify-content-center border border-2 border-dark";

  var checkbox = document.createElement("input");
  checkbox.id = "checkbox" + tag_id;
  checkbox.setAttribute("type", "checkbox");
  checkbox.checked = true;
  checkbox.onclick = function ()
  {
    var allPrice = document.getElementById("all price");
    allPrice.innerHTML= "<h3>" + tableAllPrice() + "</h3>";
  }

  tag.append(checkbox);

  return tag;
}

function getButton (tag_id)
{
  var tag = document.createElement("div");
  tag.id = "parent_button" + tag_id;
  tag.className = "col-2 d-flex justify-content-center border border-2 border-dark";

  var button = document.createElement("button");
  button.id = "button" + tag_id;
  button.innerHTML = "Удалить";
  button.onclick = function() {
    var products = document.getElementById("products");
    products.removeChild(document.getElementById("name" + tag_id));
    products.removeChild(document.getElementById("price" + tag_id));
    products.removeChild(document.getElementById("parent_checkbox" + tag_id));
    products.removeChild(document.getElementById("parent_button" + tag_id));

    tableDelete(tag_id);
    var allPrice = document.getElementById("all price");
    allPrice.innerHTML= "<h3>" + tableAllPrice() + "</h3>";
  }

  tag.append(button);

  return tag;
}

function onButtonClick ()
{
  var row = {
    pos: table.length,
    name: getName(table.length),
    price: getPrice(table.length),
    checkbox: getCheckbox(table.length),
    button: getButton(table.length)
  }

  table.push(row);
  document.getElementById("products").append(row.name);
  document.getElementById("products").append(row.price);
  document.getElementById("products").append(row.checkbox);
  document.getElementById("products").append(row.button);

  var allPrice = document.getElementById("all price");
  allPrice.innerHTML= "<h3>" + tableAllPrice() + "</h3>";
}
