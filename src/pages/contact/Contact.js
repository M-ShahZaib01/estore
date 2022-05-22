import React from 'react'

const Contact = () => {
  return (
    <>
         <h1 class="text-center"><b class="logo">eStore</b></h1>
    <div class="container">

      <h1 class="mt-4">Contact us</h1>
      <br/>
      <h2 class="text-center">How can we help?</h2><br/>
      <div class="contact-box d-flex justify-content-center">
        <form class="row g-3 w-75">
          <div class="col-md-12">
            <label for="inputEmail4" class="form-label">Email:</label>
            <input type="email" class="form-control" placeholder="name@example.com" id="inputEmail4"/>
          </div>

          <div class="col-12">
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Subject:</label>
            <input type="text" class="form-control mb-3" id="formGroupExampleInput" placeholder="Subject..."/>
            <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Your Query here..."
              rows="3"></textarea>
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">City</label>
            <input type="text" class="form-control" placeholder="e.g Faisalabad" id="inputCity"/>
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">State</label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col-md-2">
            <label for="inputZip" class="form-label">Zip</label>
            <input type="text" class="form-control" id="inputZip" placeholder="Zip Code..."/>
          </div>
          <div class="col-12">

          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-success">Submit</button>
          </div>
        </form>
</div>
      </div>
  
    </>
  )
}

export default Contact