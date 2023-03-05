import AllMeetupsPage from "./AllMeetups";
import Favorites from "./Favorites";
import NewMeetup from "./NewMeetup";

const router = [
  {
    path: "/",
    element: <AllMeetupsPage />,
    id: 0,
  },
  {
    path: "/new-meetup",
    element: <NewMeetup />,
    id: 1,
  },
  {
    path: "/favorites",
    element: <Favorites />,
    id: 2,
  },
];

export default router;
