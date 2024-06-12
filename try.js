const parent = document.querySelector('.parent');
const addBtn = document.querySelector('.add-btn');
const deleteBtn = document.querySelector('.delete-btn');

addBtn.addEventListener('click', event => {

    event.preventDefault();

    console.log(event);
    let div = document.createElement('div');
    div.style.width = '200px';
    div.style.height = '100px';
    div.style.backgroundColor = 'teal';
    div.style.margin = '10px 0px';
    div.style.position = 'relative';
    div.style.display = 'flex';
    div.style.alignItems = 'center';
    div.style.justifyContent = 'center';
    div.style.cursor = 'pointer';

    parent.append(div);

    let childDiv = document.createElement('div');

    childDiv.style.height = '50px';
    childDiv.style.width = '50px';
    childDiv.style.borderRadius = '50%';
    childDiv.style.backgroundColor = 'tomato';
    childDiv.style.position = 'absolute';

    div.appendChild(childDiv);
});


deleteBtn.addEventListener('click', function(event) {
    document.removeChild(this.div);
});
