import { createBrowserRouter } from "react-router-dom";
import AllMeetupsPage from "./AllMeetups";
import Favorites from "./Favorites";
import NewMeetup from "./NewMeetup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AllMeetupsPage />,
  },
  {
    path: "/new-meetup",
    element: <NewMeetup />,
  },
  {
    path: "/favorites",
    element: <Favorites/>
  },
]);
export default router
