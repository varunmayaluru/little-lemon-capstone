import React from 'react';

const BookingForm = (props) => {
    const [date, setDate] = React.useState('');
    const [time, setTime] = React.useState('');
    const [guests, setGuests] = React.useState('');
    const [occasion, setOccasion] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }
  return (
    <header>
        <section>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div>
                        <label htmlFor='book-date'>Choose Date</label>
                        <input type='date' id='book-date' name='book-date' onChange={(e) => handleChange(e.target.value)}
                        value={date} required />
                    </div>

                    {/* for time selection */}
                    <div>
                        <label htmlFor='book-time'>Choose Time: </label>
                        <select id='"book-time' value={time} onChange={(e) => setTime(e.target.value) }>
                            <option value=''>Select a Time</option>
                            {
                                props.availableTimes.availableTimes.map(availableTimes => {
                                    return <option key={availableTimes}>{availableTimes}</option>}
                                )
                            }
                        </select>
                    </div>

                    {/* for number of guests */}
                    <div>
                        <label htmlFor="book-guests">Number of Guests:</label>
                        <input id="book-guests" min="1" value={guests} onChange={(e) => {setGuests(e.target.value)}} type={"number"} placeholder={0} max={10} required></input>
                    </div>

                    {/* for occasion */}
                    <div>
                        <label htmlFor='book-occasion'>Occasion:</label>
                        <select id='book-occasion' key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                            <option>Birthday</option>
                            <option>Engagement</option>
                            <option>Anniversary</option>
                        </select>
                    </div>

                    {/* Submit button */}
                    <div className='btnReceive'>
                        <input aria-label='"On Click' type='submit' value={"Make your Reservation"} />
                    </div>

                </fieldset>
            </form>
        </section>
    </header>
  );
}

export default BookingForm;
