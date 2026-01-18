import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, useFieldArray } from 'react-hook-form';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { DeleteOutlined } from '@ant-design/icons';
import { addProfession } from '../../redux/profession/operationsProfessions';
import { Loader } from '../../components/Loader/Loader';
import { Modal } from '../../components/Modal/Modal';
import { AddButton } from '../../components/Buttons/AddButton/AddButton';
import {
  AdminContainer,
  Form,
  LectureBlock,
  PhotoSection,
  SubmitButton,
  FileInputLabel,
  AdminHeader,
  LecturesHeader,
  AddLectureBtn,
  RemoveLectureBtn,
  LectureBadge,
} from './AdminAddProfession.styled';

const AdminAddProfession = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isLoading } = useSelector(state => state.professions);
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  if (user?.role !== 'admin') return null;

  const { register, control, handleSubmit, reset } = useForm({
    defaultValues: {
      title: '',
      category: 'driver',
      aboutText: '',
      lectures: [{ lectureTitle: '', content: '' }],
    },
  });

  const { fields, append, remove } = useFieldArray({ control, name: 'lectures' });

  const onSubmit = async data => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('category', data.category);
    formData.append('about[text]', data.aboutText);

    if (data.cover?.[0]) formData.append('cover', data.cover[0]);
    if (data.poster?.[0]) formData.append('poster', data.poster[0]);
    if (data.photos?.length > 0) {
      Array.from(data.photos).forEach(file => formData.append('photos', file));
    }

    data.lectures.forEach((lecture, index) => {
      formData.append(`lectures[${index}][lectureTitle]`, lecture.lectureTitle);
      formData.append(`lectures[${index}][content]`, lecture.content);
    });

    const resultAction = await dispatch(addProfession(formData));

    if (addProfession.fulfilled.match(resultAction)) {
      Notify.success('Професію успішно додано');
      reset();
      setIsModalOpen(false);
    } else {
      Notify.failure('Помилка при додаванні');
    }
  };

  return (
    <AdminContainer>
      <AdminHeader>
        <h1>Керування контентом</h1>
        <AddButton onClick={() => setIsModalOpen(true)}>Додати професію</AddButton>
      </AdminHeader>

      {isModalOpen && (
        <Modal title="Нова професія" onClose={() => setIsModalOpen(false)}>
          {isLoading && <Loader />}

          <Form onSubmit={handleSubmit(onSubmit)}>
            <label>Назва</label>
            <input {...register('title')} placeholder="Назва професії" required />

            <label>Категорія</label>
            <select {...register('category')} required>
              <option value="driver">Водій</option>
              <option value="cook">Кухар</option>
              <option value="secretary">Секретар</option>
              <option value="locksmith">Слюсар</option>
              <option value="web">Веб-дизайнер</option>
              <option value="psychologist">Психолог</option>
            </select>

            <label>Опис професії</label>
            <textarea {...register('aboutText')} placeholder="Детальний опис для розділу About" required />

            <LecturesHeader>
              <h4>Лекції</h4>
              <AddLectureBtn type="button" onClick={() => append({ lectureTitle: '', content: '' })}>
                + Додати лекцію
              </AddLectureBtn>
            </LecturesHeader>

            {fields.map((item, index) => (
              <LectureBlock key={item.id}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <LectureBadge>ЛЕКЦІЯ №{index + 1}</LectureBadge>
                  <RemoveLectureBtn type="button" onClick={() => remove(index)}>
                    <DeleteOutlined />
                  </RemoveLectureBtn>
                </div>

                <input {...register(`lectures.${index}.lectureTitle`)} placeholder="Заголовок лекції" required />
                <textarea
                  {...register(`lectures.${index}.content`)}
                  placeholder="Текст лекції"
                  style={{ minHeight: '80px' }}
                  required
                />
              </LectureBlock>
            ))}

            <PhotoSection>
              <div className="file-input-wrapper">
                <label>Постер професії</label>
                <FileInputLabel>
                  <span>+ Вибрати фото</span>
                  <input type="file" {...register('poster')} accept="image/*" />
                </FileInputLabel>
              </div>

              <div className="file-input-wrapper">
                <label>Головна обкладинка</label>
                <FileInputLabel>
                  <span>+ Вибрати головне фото</span>
                  <input type="file" {...register('cover')} accept="image/*" />
                </FileInputLabel>
              </div>

              <div className="file-input-wrapper">
                <label>Галерея фотографій</label>
                <FileInputLabel>
                  <span>+ Додати фото до галереї</span>
                  <input type="file" multiple {...register('photos')} accept="image/*" />
                </FileInputLabel>
              </div>
            </PhotoSection>

            <SubmitButton type="submit" disabled={isLoading}>
              {isLoading ? 'Завантаження...' : 'Опублікувати'}
            </SubmitButton>
          </Form>
        </Modal>
      )}
    </AdminContainer>
  );
};

export default AdminAddProfession;
