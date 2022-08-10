/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container,
         Button } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/header.png") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/now-logo.png")}
            ></img>
            <h2 className="h1-seo">Quer iniciar na área de Tecnologia?</h2>
            <h4>Vem com a gente! A MMTech tem um compromisso de formar novos <br />profissionais de Tecnologia e isso começa com a família MM! </h4> 
            <Button className="btn-round btn-neutral mr-3" color="info" type="button" size="lg">
                <i className="now-ui-icons mr-2 ui-2_favourite-28"></i> Inscreva-se
              </Button>

              <Button className="btn-round btn-neutral" color="info" type="button" size="lg">
                <i className="now-ui-icons mr-2 travel_info"></i> Saiba mais
              </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
