import Container from "../../../components/Container/Container";

const Footer = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-[292px] justify-between items-center text-[20px] text-[#fff]">
        <a href="#">Subscribe</a>
        <a href="#">Build</a>
        <a href="#">Case Studies</a>
        <a href="#">Stake</a>
        <a href="#">Blog</a>
      </div>
    </Container>
  );
};

export default Footer;
