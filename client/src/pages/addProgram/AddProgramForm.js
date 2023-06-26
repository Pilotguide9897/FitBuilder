import React, { useState } from "react";
import { Form, Input, InputNumber, Button } from "antd";
import { useMutation, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { ADD_PROGRAM } from "../../utils/mutations";

const { TextArea } = Input;

const CreateProgram = () => {
  const [title, setTitle] = useState("");
  const [weeks, setWeeks] = useState(1);
  const [days, setDays] = useState(1);
  const [description, setDescription] = useState("");

  const [addProgram, { loading, error }] = useMutation(ADD_PROGRAM);
  const navigate = useNavigate();

  // We will need to replace the user id with its actual value, but I am not sure how to do that right now...
  const handleFormSubmit = async () => {
    try {
      await addProgram({
        variables: { userId: "yourUserId", title, workouts: [], weeks, days },
      });
      navigate("/programs");
    } catch (error) {
      console.error("Error occurred during the mutation:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div style={{ width: "80%" }}>
        {" "}
        {/* Added this div */}
        <Form onFinish={handleFormSubmit}>
          <h1>Create Program</h1>

          <Form.Item label="Title">
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          </Form.Item>

          <Form.Item label="Weeks">
            <InputNumber
              min={1}
              value={weeks}
              onChange={(value) => setWeeks(value)}
            />
          </Form.Item>

          <Form.Item label="Days per Week">
            <InputNumber
              min={1}
              value={days}
              onChange={(value) => setDays(value)}
            />
          </Form.Item>

          <Form.Item label="Description">
            <TextArea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Item>

          <Form.Item>
            <Button
              style={{ marginLeft: "10px" }}
              onClick={() => navigate("/programs")}
            >
              Cancel
            </Button>
            <Button type="primary" htmlType="submit" loading={loading}>
              Create Program
            </Button>
          </Form.Item>

          {error && <p>Error: {error.message}</p>}
        </Form>
      </div>{" "}
      {/* End of added div */}
    </div>
  );
};

export default CreateProgram;