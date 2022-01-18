import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useForm, useFormState } from 'react-hook-form';
import { Button } from './styled/Button.styled';
import { FormControl } from './styled/FormControl.styled';
import { InlineGrid } from './styled/InlineGrid.styled';
import Image from 'next/image';

export interface IFormValues {
  title: string;
  description: string;
  email: string;
}

interface IFormProps {
  onSubmit: (data: IFormValues, preview: boolean) => void;
  setIsLoading: (isLoading: boolean) => void;
}

const StyledForm = styled.form`
  display: flex;
  max-width: 500px;
  flex-direction: column;
  gap: 3rem;
  justify-content: space;
  margin: 0;
  font-family: Raleway;
  position: relative;

  .merch-options {
    display: flex;
    width: 100%;
  }

  .UpperErrors,
  #DescriptionError {
    position: absolute;
    font-family: Raleway;
    color: white;
    transition: none;
  }

  .type-of-merch {
    display: flex;
    height: 100px;
    width: 100%;

    div {
      display: flex;
      margin: 0 40px 0 0;
      width: 100px;
      position: relative;

      label {
        display: inline-block;
        padding: 0;
        cursor: pointer;
        border: 1px solid rgba(51, 51, 51);
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 10px;

        input {
          display: none;

          :checked + span:after {
            opacity: 1;
          }
        }

        span {
          position: relative;
          margin: 0;
          display: flex;

          p {
            position: absolute;
            color: white;
            width: 70%;
            text-align: center;
            margin: 0;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }

          img {
            position: absolute;
            margin: 0;
            top: 100%;
            left: 50%;
            transform: translate(-50%, -50%);
          }

          &:before {
            content: '';
            color: white;
            font-size: 14px;
            width: 100px;
            height: 60px;
            display: inline-block;
            vertical-align: top;
          }
          &:after {
            content: '';
            border: 1px solid #aad725;
            border-radius: 10px;
            box-shadow: 0px 8px 92px rgba(170, 215, 37, 0.32);
            width: 100px;
            height: 98px;
            position: absolute;
            top: -1px;
            left: -1px;
            transition: 300ms;
            opacity: 0;
          }
        }
      }
    }
  }
  .color-options {
    display: flex;
    width: 100px;
    justify-content: space-around;
    align-items: center;

    label {
      display: inline-block;
      padding: 0;
      cursor: pointer;
      background-color: rgba(255, 255, 255, 0);
      border-radius: 10px;

      input {
        display: none;
        :checked + span:after {
          opacity: 1;
        }
      }

      #black-one {
        background-color: black;
      }

      span {
        position: relative;
        background-color: white;
        display: inline-block;
        margin: 0;
        width: 25px;
        height: 25px;
        border: 2px solid white;
        border-radius: 50%;

        &:before {
          content: '';
        }
        &:after {
          content: '';
          border: 2px solid #aad725;
          border-radius: 50%;
          box-shadow: 0px 8px 92px rgba(170, 215, 37);
          width: 21px;
          height: 21px;
          position: absolute;
          top: -2px;
          left: -2px;
          transition: 300ms;
          opacity: 0;
        }
      }
    }
  }
`;

export const Form: React.FC<IFormProps> = props => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormValues>();
  const { isSubmitting } = useFormState<IFormValues>({ control });

  const setIsLoading = props.setIsLoading;
  useEffect(() => {
    setIsLoading(isSubmitting);
  }, [isSubmitting, setIsLoading]);

  const onPreview = () => handleSubmit(data => props.onSubmit(data, true))();
  const onSubmit = () => handleSubmit(data => props.onSubmit(data, false))();

  return (
    <StyledForm>
      <div>
        <FormControl
          placeholder="Place Name"
          autoComplete="off"
          className="credential-inputs"
          {...register('title', {
            required: 'Place name is required',
            maxLength: {
              value: 20,
              message: 'Value longer than 20 characters',
            },
          })}
        />
        {errors.title && <p className="UpperErrors">{errors.title.message}</p>}
      </div>
      <div>
        <FormControl
          placeholder="E-mail"
          autoComplete="off"
          className="credential-inputs"
          {...register('email', {
            required: 'Email is required',
            maxLength: {
              value: 50,
              message: 'Value longer than 50 characters',
            },
          })}
        />
        {errors.email && <p className="UpperErrors">{errors.email.message}</p>}
      </div>
      <div>
        <FormControl
          id="formDescription"
          autoComplete="off"
          placeholder="Description"
          {...register('description', {
            required: 'Place description is required',
            maxLength: {
              value: 200,
              message: 'Value longer than 255 characters',
            },
          })}
        />
        {errors.description && <p id="DescriptionError">{errors.description.message}</p>}
      </div>
      <div className="merch-options">
        <div className="type-of-merch">
          <div>
            <label>
              <input type="radio" name="choice" value="shirt"></input>
              <span id="tshirt-span">
                <p>T-SHIRT</p>
                <Image src="/images/white-shirt.png" />
              </span>
            </label>
          </div>
          <div>
            <label>
              <input type="radio" name="choice" value="mug"></input>
              <span id="mug-span">
                <p>MUG</p>
                <Image src="/images/white-mug.png" />
              </span>
            </label>
          </div>
        </div>
        <div className="color-options">
          <label>
            <input type="radio" name="color-choice" value="white"></input>
            <span></span>
          </label>
          <label>
            <input type="radio" name="color-choice" value="black"></input>
            <span id="black-one"></span>
          </label>
        </div>
      </div>
      <InlineGrid>
        <Button disabled={isSubmitting} onClick={onPreview} type="button">
          Preview
        </Button>
        <Button disabled={true} onClick={onSubmit} type="button">
          Continue
        </Button>
      </InlineGrid>
    </StyledForm>
  );
};
