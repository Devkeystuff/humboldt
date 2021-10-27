import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

export interface IFormValues {
  title: string;
  description: string;
  email: string;
}

interface IFormProps {
  onSubmit: (data: IFormValues) => void;
}

const StyledForm = styled.form`
  display: flex-inline;
  width: 40vw;
  height: 85vh;
  margin: 0;
  font-family: Raleway;


  h1{
    margin: 0 0 10px 0;
    font-size: 63px;
    font-weight: 900;
    text-shadow: -1px -1px 0 #AAD725, 1px -1px 0 #AAD725, -1px 1px 0 #AAD725, 1px 1px 0 #AAD725;
    color: black;

    ::before{
      content: "SELECT A PLACE";
      position:absolute;
      margin: -3px;
      color: white;
      text-shadow: none;
    }
  }

  #PlaceAndEmail{
    width: 95%;
    margin: 0 0 25px 0;
    div{
      width: 100%;
      &:first-child{
        margin-right: 5%;
      }
      input{
        width: 100%;
        height: 50px;
        font-size: 18px;
        padding: 20px;
        border: 1px solid rgba(51, 51, 51);
        background-color: rgba(51, 51, 51);
        border-radius: 10px;
        color: white;
        transition: 0.3s;

        ::placeholder  {
          font-family: Source Code Pro;
        }

        &:focus {
          outline: none;
          border: 1px solid #AAD725;
          box-shadow: 0px 8px 92px rgba(170, 215, 37, 0.32);
        }
      }
    }
  }

  #formDescription{
    margin: 20px auto;
    width: 95%;
    padding: 20px 20px 51vh 20px;
    border: 1px solid rgba(51, 51, 51);
    background-color: rgba(51, 51, 51);
    border-radius: 10px;
    color: white;
    font-size: 18px;
    transition: 0.3s;

    ::placeholder  {
      font-family: Source Code Pro;
    }

    &:focus {
      outline: none;
      border: 1px solid #AAD725;
      box-shadow: 0px 8px 92px rgba(170, 215, 37, 0.32);
    }
  }

  #submitInput{
    width: 45%;
    height: 50px;
    margin: 25px auto;
    font-size: 20px;
    background-color: #AAD725;
    border-radius: 10px;
    border: none;
    transition: all 0.2s ease-in-out;

    &:hover{
      cursor: pointer;
      box-shadow: 0 7.5px 30px 2px rgba(170, 215, 37, .4);
      font-size: 21px;
    }
  }

  #PlaceAndEmail{
    display:flex;
  }

  .UpperErrors{
    position: absolute;
    color:white;
    margin: 12px 0 0 0px;
    &:first-child{
      margin-left: 390px;
    }
  }

  #DescriptionError{
    position: absolute;
    color:white;
    margin-top: -7px;
  }
`;

export const Form: React.FC<IFormProps> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>();
  return (
    <StyledForm onSubmit={handleSubmit(props.onSubmit)}>
      <h1>SELECT A PLACE</h1>
      <div id="PlaceAndEmail">
        <div>
          <input placeholder="Place Name" autocomplete="off"
            {...register("title", {
              required: "Place name is required",
              maxLength: {
                value: 20,
                message: "Value longer than 20 characters",
              },
            })}
          />
          {errors.title && <p className="UpperErrors">{errors.title.message}</p>}
        </div>
        <div>
          <input placeholder="E-mail" autocomplete="off"
            {...register("email", {
              required: "Email is required",
              maxLength: {
                value: 50,
                message: "Value longer than 50 characters",
              },
            })}
          />
          {errors.email && <p className="UpperErrors">{errors.email.message}</p>}
        </div>
      </div>
      <input id="formDescription" autocomplete="off" placeholder="Description"
        {...register("placeDescription", {
          required: "Place description is required",
          maxLength: {
            value: 255,
            message: "Value longer than 255 characters",
          },
        })}
      />
      {errors.placeDescription && <p id="DescriptionError">{errors.placeDescription.message}</p>}
      <input type="submit" id="submitInput" />
    </StyledForm>
  );
};
