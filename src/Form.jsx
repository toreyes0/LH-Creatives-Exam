import './Form.css'

function Form() {
  return (
    <>
      <form id='form'>
        <h2>Form</h2>
        <div id='form-container'>
          <div id='form-subcontainer'>
            <div className='form-item'>
              <label>Name</label>
              <input type='text' />
            </div>
            <div className='form-item'>
              <label>Company</label>
              <input type='text' />
            </div>
            <div className='form-item'>
              <label>E-mail</label>
              <input type='text' />
            </div>
            <div className='form-item'>
              <label>Select Field</label>
              <div id='select-outer-container'>
                <div id='select-container'>
                  <select defaultValue=''>
                    <option value='' disabled></option>
                    <option>Lorem Ipsum</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='form-item'>
              <label>Radio Field</label>
              <div id='radio-container'>
                <label>
                  <input type='radio' name='option'/>
                  Selection 1
                </label>
                <label>
                  <input type='radio' name='option'/>
                  Selection 2
                </label>
                <label>
                  <input type='radio' name='option'/>
                  Selection 3
                </label>
                <label>
                  <input type='radio' name='option'/>
                  Selection 4
                </label>
              </div>
            </div>
            <div className='form-item'>
              <label>Checkbox Field</label>
              <div id='check-container'>
                <label className="container">Selection 1
                  <input type="checkbox"/>
                  <span className="checkmark"></span>
                </label>
                <label className="container">Selection 2
                  <input type="checkbox"/>
                  <span className="checkmark"></span>
                </label>
                <label className="container">Selection 3
                  <input type="checkbox"/>
                  <span className="checkmark"></span>
                </label>
                <label className="container">Selection 4
                  <input type="checkbox"/>
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
          </div>
          <input type='submit' id='submit' value='Submit' />
        </div>
      </form>
    </>
  )
}

export default Form
