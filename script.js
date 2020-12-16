var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form Submit event 
form.addEventListener('submit', addItem);

// Delete event 
itemList.addEventListener('click', removeItem);

// Filter Event 
filter.addEventListener('keyup',filterItems);
// Add Item 
function addItem (e) {
    e.preventDefault();


    // Get Input value 
var newItem = document.getElementById('item').value;

// Create new li element 
var li = document.createElement('li');

// Add class 
li.className = 'list-group-item';

// Add textNode with input value?

li.appendChild(document.createTextNode(newItem));

// Create Delete btn element

var deleteBtn = document.createElement('button');

// Add class 

deleteBtn.className='btn btn-danger btn-sm float-right delete';

// Append Text Node \

deleteBtn.appendChild(document.createTextNode('X'));

//  append btn to li 
li.appendChild(deleteBtn);

// append li to list 
itemList.appendChild(li);
}


// Remove Function 
function removeItem(e) {
    if(e.target.classList.contains('delete')) {
if(confirm('Are you Sure?')) {
    var li = e.target.parentElement;
    itemList.removeChild(li);
}
    }
}

//Filter Items
function filterItems(e) {
    //convert text ot lowercase

var text = e.target.value.toLowerCase();

//Get li s

var items = itemList.getElementsByTagName('li');

//Convert to Array
Array.from(items).forEach(function(item) {
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display='block';
    }
    else {
        item.style.display='none';
    }
})
}
