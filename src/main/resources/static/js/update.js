class UpdateForm extends React.Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
		
        axios.post('/addBooking', {  //post to addBooking would update an object with the same id we receive from our cookies.
            params: {
				id:cookies.get('id')
              startDate: this.startDate.value,
              endDate: this.endDate.value,
              clientName: this.clientName.value,
			  comment: this.comment.value,
            }
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
             
					   
				<div><label> Start date : <input type="text" name="startDate" ref={(input) => { this.startDate = input }} /> </label></div>
            <div><label> End date: <input type="text" name="endDate" ref={(input) => { this.endDate = input }} /> </label></div>
            
            <div><label> Clients name: <input type="text" name="clientName" ref={(input) => { this.clientName = input }} /> </label></div>
            <div><label> Room type: <input type="text" name="roomType" id="roomType" ref={(input) => { this.roomType = input }}/> </label></div>
            
            <div><label> Comment: <input type="text" name="comment" ref={(input) => { this.comment = input }}/> </label></div>
			
			
            <div><input id="submit" type="submit" value="Update"/></div>	   
	
            </form>
        );
    }
}
