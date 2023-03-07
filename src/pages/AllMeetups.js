//repsonsible for loading and displating all meetups we have
import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "This is a first meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
//   {
//     id: "m2",
//     title: "This is a second meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
// ];

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [dataMeetups, setDataMeetups] = useState([]);
  //we want to send request whenever this component is being rendered

  useEffect(() => {
    fetch("https://meetup-196d6-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
            /*
            id:key,
            other data 
            */
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        setDataMeetups(meetups);
      });
  }, []);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section>
      <h1>All Meetups Page</h1>
      <MeetupList meetup={dataMeetups} />
      {/* <ul>
      {DUMMY_DATA.map((meetup) => {
        return <li key={meetup.id}>{meetup.title}</li>;
      })}
    </ul> */}
    </section>
  );
}
export default AllMeetupsPage;
