function User({ user }) {
  const { name, cell, dob, email, picture } = user;
  const fullName = `${name.first} ${name.last}`;
  const picSrc = picture.large;

  return (
    <div className="user">
      <img src={picSrc} alt={`${fullName} picture`} />
      <h2>{fullName}</h2>
      <div className="user-info">
        <div className="user-cell">{cell}</div>
        <div className="user-email">{email}</div>
      </div>
    </div>
  );
}

export default User;
