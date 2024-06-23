function Form ({title}){
    return(
        <form>
            <div>{title}</div>
            <div className="form-grou">
                <input type="email" className="form-control" placeholder="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div classNameName="mb-3">
                <input type="password" classNameName="form-control" placeholder="exampleInputPassword1"/>
            </div>
            <div classNameName="mb-3 form-check">
                <input type="checkbox" classNameName="form-check-input" id="exampleCheck1"/>
                <label classNameName="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" classNameName="btn btn-primary">Submit</button>
        </form>
    )
}

export default Form