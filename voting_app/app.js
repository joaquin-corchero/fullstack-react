const ProductList = React.createClass({
    render: () => {
        return(
            <div className='ui-themes'>
            Hello!
            </div>
        );
    }
});

ReactDOM.render(
    <ProductList />,
    document.getElementById('content')
);