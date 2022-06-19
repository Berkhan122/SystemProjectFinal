import React from "react";
import { MDBFooter, MDBContainer, MDBIcon } from "mdb-react-ui-kit";
import { AiFillGithub } from "react-icons/ai";
export default function Footer() {
  return (
    <MDBFooter className="bg-dark text-center text-white">
      <MDBContainer className="p-4 pb-0">
        <section className="mb-4">
          Bu sitede askeri tarih ile ilgili bir çok içerik bulacaksınız. Bunlara
          ek olarak yayınlanmış makalelere de erişebilirsiniz. Bu site bir
          üniversite öğrencisinin bitirme projesidir. Burada gördüğünüz her şey
          açık kaynaklardan alınmıştır.
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <AiFillGithub></AiFillGithub>:
        <a className="text-white" href="https://github.com/Berkhan122">
          Github
        </a>
      </div>
    </MDBFooter>
  );
}
