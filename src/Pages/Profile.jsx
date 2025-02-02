import React, { useState, useContext } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { AuthContext } from "../context/AuthContext";
import "../styles/Profile.css";
import userIcon from "../assets/images/user.png";
import { BASE_URL } from "../utils/config";

const Profile = () => {
  const { user, dispatch } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    username: user?.username || "",
    email: user?.email || "",
    photo: user?.photo || "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`${BASE_URL}/users/${user._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      dispatch({ type: "UPDATE_USER", payload: result.data });
      alert("Profile updated successfully!");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="profile__section">
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="profile__container">
              <div className="profile__header">
                <div className="profile__img">
                  <img src={user?.photo || userIcon} alt="profile" />
                </div>
                <h2>My Profile</h2>
              </div>

              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder="Username"
                    id="username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </FormGroup>

                <FormGroup>
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled
                  />
                </FormGroup>

                <FormGroup>
                  <label>Profile Photo URL</label>
                  <input
                    type="text"
                    placeholder="Photo URL"
                    id="photo"
                    value={formData.photo}
                    onChange={handleChange}
                  />
                </FormGroup>

                <h4 className="password__change">Change Password</h4>

                <FormGroup>
                  <label>Current Password</label>
                  <input
                    type="password"
                    placeholder="Current Password"
                    id="currentPassword"
                    value={formData.currentPassword}
                    onChange={handleChange}
                  />
                </FormGroup>

                <FormGroup>
                  <label>New Password</label>
                  <input
                    type="password"
                    placeholder="New Password"
                    id="newPassword"
                    value={formData.newPassword}
                    onChange={handleChange}
                  />
                </FormGroup>

                <FormGroup>
                  <label>Confirm New Password</label>
                  <input
                    type="password"
                    placeholder="Confirm New Password"
                    id="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </FormGroup>

                {error && <div className="error__message">{error}</div>}

                <Button className="update__btn" type="submit" disabled={loading}>
                  {loading ? "Updating..." : "Update Profile"}
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Profile; 