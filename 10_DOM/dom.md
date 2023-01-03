## DOM Methods

- `getElementById`: This method retrieves an element from the document by its ID.

- `querySelector`: This method retrieves the first element that matches a specified CSS selector.

- `querySelectorAll`: This method retrieves all elements that match a specified CSS selector.

- `getElementsByTagName`: This method retrieves all elements with a specified tag name.

- `getElementsByClassName`: This method retrieves all elements with a specified class name.

  Here are some examples of how you might use these methods:

  ```js
  Copy codeconst element = document.getElementById('my-element');
  
  const firstParagraph = document.querySelector('p');
  
  const listItems = document.querySelectorAll('li');
  
  const divs = document.getElementsByTagName('div');
  
  const redElements = document.getElementsByClassName('red');
  ```

Here is a list of some common DOM (Document Object Model) properties and methods that you can use to manipulate HTML elements:

#### Properties

- `innerHTML`: This property gets or sets the HTML content within an element.
- `style`: This property gets or sets the inline style of an element.
- `className`: This property gets or sets the class name of an element.
- `id`: This property gets or sets the ID of an element.
- `value`: This property gets or sets the value of an input element.

#### Methods

- `getAttribute`: This method gets the value of an attribute of an element.
- `setAttribute`: This method sets the value of an attribute of an element.
- `addEventListener`: This method adds an event listener to an element.
- `removeEventListener`: This method removes an event listener from an element.
- `appendChild`: This method adds a new child element to an element.

Here are some examples of how you might use these properties and methods:

```js
Copy codeconst element = document.getElementById('my-element');

element.innerHTML = 'Hello, world!';

element.style.color = 'red';

element.className = 'highlight';

element.id = 'new-id';

const input = document.querySelector('input');
input.value = 'Hello, world!';

const attributeValue = element.getAttribute('data-attribute');

element.setAttribute('data-attribute', 'new value');

element.addEventListener('click', () => {
  console.log('Element was clicked!');
});

element.removeEventListener('click', myClickHandler);

const newElement = document.createElement('p');
newElement.innerHTML = 'This is a new element';
element.appendChild(newElement);
```