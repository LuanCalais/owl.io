<script setup>
import FormHome from "./components/formHome.vue";
</script>

<template>
  <nav class="container">
    <div class="row">
      <div class="col-sm-12 col-lg-6">
        <h1 class="mt-4"><i class="bx bx-code-alt"></i> <span>Owl.io</span></h1>
      </div>

      <div class="col-sm-12 col-lg-6">
        <div class="row">
          <div class="col-sm-12 col-lg-8">
            <div class="lateral">
              "Lorem Ipsum is simply dummy text of the printing and typesetting
              industry."
            </div>
          </div>
          <div class="col-lg-4 perfis">
            <div class="row">
              <div class="col-lg-6">
                <ul class="list-perfil">
                  <li>
                    <img src="./assets/img/perfis/p1.jpg" class="img1" alt="" />
                  </li>
                  <li>
                    <img src="./assets/img/perfis/p2.jpg" class="img2" alt="" />
                  </li>
                  <li>
                    <img src="./assets/img/perfis/p3.jpg" class="img3" alt="" />
                  </li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul class="review-list">
                  <li>
                    <i class="bx bxs-star review first-list-review"></i>
                  </li>
                  <li>
                    <i class="bx bxs-star review"></i>
                  </li>
                  <li>
                    <i class="bx bxs-star review"></i>
                  </li>
                  <li>
                    <i class="bx bxs-star review"></i>
                  </li>
                  <li>
                    <i class="bx bxs-star-half review"></i>
                  </li>
                </ul>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <header class="container">
    <div class="row">
      <div class="col-sm-12 col-lg-6">
        <div class="left-header">
          <FormHome :isExistUser="false" />
        </div>
      </div>

      <div class="col-sm-12 col-lg-6 d-none d-md-none d-lg-block">
        <div class="ilustracao">
          <img
            src="./assets/img/ilustracoes/Ilustracao-Inicio.png  "
            class="img-fluid"
            alt=""
          />
        </div>
      </div>
    </div>
  </header>

  <section>
    <div class="conteudo-central">
      <div class="container mt-4">
        <div class="row area-1">
          <div class="col-lg-6 d-none d-md-none d-lg-block img-section">
            <img src="./assets/img/ilustracoes/sessao1-1.png" alt="" />
          </div>

          <div class="col-lg-6 mt-5">
            <div class="box-text text-section">
              <div class="box-text-h5">
                <h5>Lorem Ipsum</h5>
              </div>

              <div class="box-text-p">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="row area-2">
          <div class="col-lg-6 mt-5">
            <div class="box-text text-section">
              <div class="box-text-h5">
                <h5>Lorem Ipsum</h5>
              </div>

              <div class="box-text-p">
                <p>
                  "It is a long established fact that a reader will be
                  distracted by the readable content of a page when looking at
                  its layout. The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed to
                  using 'Content here, content here', making it look like
                  readable English."
                  <span> -Fulano Siclano </span>
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-6 d-none d-md-none d-lg-block img-section">
            <img
              src="./assets/img/ilustracoes/sessap1-2.png"
              alt=""
              class="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="sessaoFinal">
    <article class="container">
      <h1>OWL</h1>

      <h1>OWL</h1>
    </article>
  </section>

  <footer class="bg-dark text-center text-white">
    <div class="container p-4 pb-0">
      <div class="mb-4">
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="https://www.facebook.com/luan.calais"
          role="button"
          target="_blank"
          ><i class="bx bxl-facebook"></i
        ></a>
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="https://www.instagram.com/luan_calais/?hl=en"
          target="_blank"
          role="button"
          ><i class="bx bxl-instagram"></i
        ></a>
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="https://www.linkedin.com/in/luan-s-calais-186104217/?originalSubdomain=br"
          target="_blank"
          role="button"
          ><i class="bx bxl-linkedin"></i
        ></a>
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="https://github.com/LuanCalais?tab=repositories"
          target="_blank"
          role="button"
          ><i class="bx bxl-github"></i
        ></a>
      </div>
    </div>

    <div
      class="text-center p-3 copyright-box"
      style="background-color: rgba(0, 0, 0, 0.2)"
    >
      Feito com <i class="bx bxs-heart"></i> por
      <span class="text-white">&nbsp; Luan_Calais</span>
    </div>
  </footer>
</template>

<style scoped></style>
