2 pages - Home page and CartPage.  All data is fake data

Home page displays image, name, price, add button, remove button

CartPage displays total, number of items in the Cart

There is a navigation bar on all pages

Home page pulls in the fake data, maps through it and passes it to the SingleProduct component(name/price/image).  cart and setCart are pulled into Home from the App component, and are passed to the SingleProduct component.

SingleProduct lays out the data on the page using data passed in from the Home page(name/price/image).  It pulls in the cart and setCart sent from the app, through Home.  It uses cart to conditionally render the buttons on the page.  If something is in the Cart then the remove button shows and vice versa.

cart starts out in the App component being empty.  it gets passed to Home, then passed again to SingleProduct.  On the Home page you can add or remove products(name/image/price) from the Cart when the button is clicked.  Each transaction shows up in the Cart, along with the total and the number of items in the Cart.

The Problem:  too much passing around of state, even to components that don't use it

Solution: context api, which sets up a context provider named Context with a state for managing a shopping cart. It makes this state and a function to update it available to all descendant components that consume the Cart context. Components can access the shopping cart state and update it as needed by using the useContext hook.
