import AnnouncementTab from "./AnnouncementTab";
import EventsTab from "./EventsTab";

const Announcement = () => {
  return (
    <>
      <section className="w-full py-10 ">
        <div className="flex justify-between w-full px-5 mx-auto lg:container xl:max-w-screen-xl">
          <AnnouncementTab />
          <EventsTab />
        </div>
      </section>
    </>
  );
};

export default Announcement;
