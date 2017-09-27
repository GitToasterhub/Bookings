var AddForm = React.createClass({
 render: function() {   
    return (
       <div>
            <form id="form" action="/addBooking" method="post" >
            <div><label> Start date : <input type="text" name="startDate"/> </label></div>
            <div><label> End date: <input type="text" name="endDate"/> </label></div>
            
            <div><label> Clients name: <input type="text" name="clientName"/> </label></div>
            <div><label> Room type: <input type="text" name="roomType" id="roomType"/> </label></div>
            
            <div><label> Comment: <input type="text" name="comment"/> </label></div>
            <div><input id="submit" type="submit" value="Add new booking"/></div>
        </form>
       </div>
     )
}      
});
      ReactDOM.render(
       <AddForm/>,
        document.getElementById('AddForm')
      );
