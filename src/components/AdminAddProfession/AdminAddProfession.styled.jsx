import styled from 'styled-components';

export const AdminContainer = styled.div`
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;

  label {
    font-weight: 600;
    font-size: 14px;
    color: #475569;
    margin-bottom: -5px;
  }

  input,
  select,
  textarea {
    padding: 12px 16px;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    font-size: 15px;
    transition: all 0.2s ease;
    outline: none;

    &:focus {
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
  }

  textarea {
    min-height: 150px;
    line-height: 1.6;
    font-family: inherit;
  }
`;

export const LectureBlock = styled.div`
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  input,
  textarea {
    background-color: #ffffff;
  }
`;

export const Button = styled.button`
  padding: 10px 24px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 15px;
  border: none;
  cursor: pointer;
  color: white;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const SubmitButton = styled(Button)`
  text-decoration: none;
  margin: 0 6px;
  color: white;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  border: 1px solid #1677ff;
  border-radius: 10px;
  box-shadow: 0 2px 0 rgb(5 145 255 / 10%);
  padding: 10px 20px;
  background-color: #1677ff;
  font-weight: 400;
  font-size: 18px;

  &:hover,
  &:focus {
    opacity: 0.8;
    background-color: white;
    color: #1677ff;
  }
  }
`;

export const PhotoSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  background-color: #f8fafc;
  padding: 25px;
  border-radius: 12px;
  border: 1px dashed #cbd5e1;
  margin-top: 20px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  .file-input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  input[type='file']::file-selector-button {
    margin-right: 20px;
    border: none;
    background: #3b82f6;
    padding: 8px 16px;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    transition: background 0.2s ease-in-out;
  }

  input[type='file']::file-selector-button:hover {
    background: #2563eb;
  }

  input[type='file'] {
    color: #64748b;
    font-size: 13px;
  }
`;

export const FileInputLabel = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background-color: #f1f5f9;
  border: 2px dashed #cbd5e1;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  color: #475569;
  font-weight: 500;
  text-align: center;

  &:hover {
    background-color: #e2e8f0;
    border-color: #3b82f6;
    color: #3b82f6;
  }

  input[type='file'] {
    display: none;
  }
`;

export const AdminHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  marginbottom: 40px;

  h1 {
    margin: 0;
    font-size: 24px;
    color: #1e293b;
  }
`;

export const LecturesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  border-top: 1px solid #e2e8f0;
  margin-top: 20px;
  padding-top: 20px;

  h4 {
    margin: 0;
  }
`;

export const AddLectureBtn = styled.button`
  background: none;
  border: none;
  color: #3a97e8;
  cursor: pointer;
  font-weight: 600;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;

export const RemoveLectureBtn = styled.button`
  border: none;
  background: none;
  color: #ef4444;
  cursor: pointer;
`;

export const LectureBadge = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
`;
