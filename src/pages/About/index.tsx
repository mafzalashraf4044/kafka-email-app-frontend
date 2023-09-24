import Card from "react-bootstrap/Card";

export function About() {
  return (
    <Card className="m-10">
      <Card.Header className="flex flex-row justify-start items-center">
        About
      </Card.Header>
      <Card.Body>
        <Card.Text className="text-left">
          At Email App, we are building a next-generation email sending service
          that is fast, scalable, and reliable. Our service uses a distributed
          architecture with Kafka to handle email sending in near real time.
          <br />
          <br />
          To send a batch of emails, simply enter the number of emails you want
          to send in the input box and click the "Send" button. We will then
          generate a job ID and add the job to the Kafka queue. Our workers will
          pick up the job from the queue and send the emails.
          <br />
          <br />
          You can view the status of your job in near real time by refreshing
          the page. The status will show you how many emails have been sent and
          how many emails are remaining.
          <br />
          <br />
          You can also close the browser and come back later to check the status
          of your job. We will store the status of your job in the database, so
          you will always be able to see the progress of your email send.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
