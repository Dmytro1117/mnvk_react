import styled from 'styled-components';

export const Button = styled.button`
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
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
`;

export const FormInput = styled.input`
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  font-size: 16px;
  outline: none;
  transition:
    border-color 0.3s,
    box-shadow 0.3s;

  &:focus {
    border-color: #1890ff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }
`;

export const FormTextarea = styled.textarea`
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  font-size: 16px;
  min-height: 150px;
  resize: vertical;
  outline: none;
  transition:
    border-color 0.3s,
    box-shadow 0.3s;

  &:focus {
    border-color: #1890ff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }
`;

export const LectureItem = styled.div`
  margin-bottom: 15px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;

export const LectureHeader = styled.div`
  padding: 15px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: ${props => (props.$isExpanded ? '#f8fafc' : '#fff')};
  transition:
    background-color 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    background-color: #f1f5f9;
  }
`;

export const IconWrapper = styled.span`
  margin-right: 12px;
  color: #3a97e8;
  font-size: 18px;
  display: flex;
  align-items: center;
`;

export const LectureTitle = styled.h3`
  font-weight: 600;
  flex-grow: 1;
  color: #1e293b;
  cursor: pointer;
  font-size: 22px;
  line-height: 1.2;
  margin-top: 0;
  text-align: center;
  text-shadow: 2px 2px 4px #000000;
`;

export const LectureContent = styled.div`
  padding: 20px;
  border-top: 1px solid #e2e8f0;
  background-color: #fff;
  animation: slideDown 0.3s ease-out;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const LectureText = styled.p`
  white-space: pre-wrap;
  margin: 0;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 1.2;
  text-align: justify;
  text-indent: 30px;
`;
