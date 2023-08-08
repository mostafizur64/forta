import Container from "../../../components/Container/Container";

const FaqItem = () => {
  return (
    <Container>
      <h1
        className="text-center text-[60px]  capitalize"
        style={{ color: "rgba(228,230,237,0.90)" }}
      >
        Frequently asked questions
      </h1>
      <div className="text-white space-y-6">
        <div className="collapse collapse-arrow bg-color">
          <input type="radio" name="my-accordion-2" checked="checked" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-color">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-color">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </div>

      
    </Container>
  );
};

export default FaqItem;
