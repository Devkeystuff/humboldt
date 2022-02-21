import styled from 'styled-components';

export const StyledForm = styled.form`
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
