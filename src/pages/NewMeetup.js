import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom";

function NewMeetupPage() {
  const history = useHistory();
  function addMeetupHandler(meetupData) {
    // default javascript function supported or we can use axios instead
    // by dfeault fetch is a get request
    fetch(
      "https://react-getting-started-1c698-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        // converts from javascript value to JSON Object
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json"
        }
      }
    ).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
