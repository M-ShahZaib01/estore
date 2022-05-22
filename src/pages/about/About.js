import React from 'react'

const About = () => {
  return (
   <>
        
        <h1 class="mt-1 text-center "><b class="logo">eStore</b></h1>
    <div class="container  justify-content-between about-section">
      <div class="about-content">
        <h1 class=" mt-4 ">About us</h1>
        <br/>
        <h2>Lorem ipsum dolor Vel, minus asperi suscipit.</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor at ducimus cumque dolore! Dolore obcaecati
          mollitia molestias odit. Maiores voluptatem quod fugiat ea necessitatibus magni, voluptatibus delectus
          tempore, veritatis, deserunt iste et dolorum vitae!</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt minus voluptatem saepe quo sunt minima
          corrupti, nam quasi suscipit voluptate voluptatibus! Animi repudiandae expedita natus, perferendis saepe
          reprehenderit officia, temporibus recusandae ad vitae praesentium.</p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione numquam obcaecati, voluptas voluptatibus
        doloribus rem nesciunt facere omnis quis animi nostrum ipsum iusto dolorem explicabo, illo necessitatibus sed
        sint? Tempora.
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dignissimos placeat harum?</p>

      </div>
      <div class="about-faq">
        <br/><br/><br/><br/>
        <h1>FAQ's</h1>
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Is cash on delivery available?
              </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias accusantium,
                eum recusandae amet inventore quaerat ad mollitia voluptatem corrupti necessitatibus.</div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                What is Our mission?
              </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fugiat vitae
                error eligendi, tempore qui labore iste aut reprehenderit nulla dolorum voluptatum sit earum veritatis.
                Blanditiis eveniet quibusdam corrupti in cumque molestiae ut voluptatem.</div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                What is the condition for getting discount?
              </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sint odit
                optio, eum ratione totam velit, laboriosam molestias explicabo quasi dicta fugiat illo nostrum quaerat
                eius esse asperiores dolor quas natus quam expedita veritatis! Iste excepturi vel nesciunt.
                Necessitatibus, quaerat!</div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingFour">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                  Does we sell quality products?
                </button>
              </h2>
              <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sint odit
                  optio, eum ratione totam velit, laboriosam molestias explicabo quasi dicta fugiat illo nostrum quaerat
                  eius esse asperiores dolor quas natus quam expedita veritatis! Iste excepturi vel nesciunt.
                  Necessitatibus, quaerat!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
         
          

    </>
  )
}

export default About