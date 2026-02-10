import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetupDetails() {
  return (
    <MeetupDetail
      title="A First Meetup"
      image="https://images.squarespace-cdn.com/content/v1/603709c4fe10c7013cc59c86/1643927361362-062ORYR7Q698R0GS4KOP/unsplash-image-PTRzqc_h1r4.jpg"
      address="Some Address 5, 12345 Some City"
      description="This is a first meetup."
    />
  );
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        id: meetupId,
        title: "A First Meetup",
        image:
          "https://images.squarespace-cdn.com/content/v1/603709c4fe10c7013cc59c86/1643927361362-062ORYR7Q698R0GS4KOP/unsplash-image-PTRzqc_h1r4.jpg",
        address: "Some Address 5, 12345 Some City",
        description: "This is a first meetup",
      },
    },
  };
}
