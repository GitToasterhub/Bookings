
var BookingsList = React.createClass({

  getInitialState: function() {
    return {
      bookings: []
    }
  },

  componentDidMount: function() {
    var _this = this;
    this.serverRequest = 
      axios
        .get("/allBookings")
        .then(function(result) {    
          _this.setState({
            bookings: result.data.bookings
          });
        })
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },
 handleDeleteClick: function(id){
  this.serverRequest = 
      axios
        .get("/deleteBooking"+id)
        .then(function (response) {
            console.log("An item was deleted");
        })
        .catch(function (error) {
            console.log(error);
        });
},

  render: function() {
   
    return (

      <div >
        <h1>Bookings</h1>
        {this.state.bookings.map(function(booking,i) {
          return (
            <div  className="card" key="{booking.id}">
               <p>Room type: {booking.roomType}</p>
              <p>Order deatils: {booking.clientName}: {booking.comment}</p>
               <p>From {booking.startDate}: to{booking.endDate}</p>
               <p>Order id:{booking.id}</p>
              <button type="button" onClick={this.props.handleDeleteClick.bind(this,booking.id)}>Delete</button>
              <br></br>
              <br></br>
            </div>
            
          );
          
        })}
      </div>
    )
  }
});
      
      ReactDOM.render(
       <BookingsList/>,
        document.getElementById('root')
      );
