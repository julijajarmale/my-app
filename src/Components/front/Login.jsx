function LogIn() {
  return (
    <div className="form-column">
      <div className="form">
        <div>
          <h2>Log In</h2>
        </div>
        <div className="form-group">
          <label className="label">E-mail</label>
          <input type="email" className="form-row" />
        </div>
        <div className="form-group">
          <label className="label">Password</label>
          <input type="password" name="password" className="form-row" />
        </div>
        <div className="form-group">
          <label className="label">Repeat Password</label>
          <input type="password" name="password" className="form-row" />
        </div>

        <button type="button" className="btn">
          Go
        </button>
      </div>
    </div>
  );
}

export default LogIn;
