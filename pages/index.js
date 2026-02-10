import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://images.squarespace-cdn.com/content/v1/603709c4fe10c7013cc59c86/1643927361362-062ORYR7Q698R0GS4KOP/unsplash-image-PTRzqc_h1r4.jpg",
    address: "Some Address 5, 12345 Some City",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://images.squarespace-cdn.com/content/v1/603709c4fe10c7013cc59c86/1643927361362-062ORYR7Q698R0GS4KOP/unsplash-image-PTRzqc_h1r4.jpg",
    address: "Some Address 10, 12345 Some City",
    description: "This is a second meetup",
  },
];

export default function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}
