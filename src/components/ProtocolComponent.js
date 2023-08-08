import React from "react";
import {
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  Button,
  Container,
  Row,
} from "reactstrap";
import "../styles/ProtocolComponent.css";

const ProtocolComponent = () => {
  return (
    <Container className="container">
      <h1>Форма протокола рентгенологического исследования</h1>
      <Form>
        <FormGroup row>
          <Label sm={12} className="header">
            Сведения о медецинской организации
          </Label>
          <Label for="organizationName" sm={2}>
            Название медицинской организации, адрес ее местонахождения
          </Label>
          <Col sm={10}>
            <Input
              id="organizationName"
              name="orgname"
              placeholder="Введите название и адрес..."
              type="text"
            />
          </Col>
          <Label for="examinationDate" sm={2}>
            Дата и время проведения исследования
          </Label>
          <Col sm={10}>
            <Input
              id="examinationDate"
              name="date"
              placeholder="Введите дату и время..."
              type="date"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={12} className="header">
            Данные о пациенте
          </Label>
          <Label for="patientSurname" sm={2}>
            Фамилия
          </Label>
          <Col sm={10}>
            <Input
              id="patientSurname"
              name="surname"
              placeholder="Введите фамилию пациента..."
              type="text"
            ></Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="patientName" sm={2}>
            Имя
          </Label>
          <Col sm={10}>
            <Input
              id="patientName"
              name="name"
              placeholder="Введите имя пациента..."
              type="text"
            ></Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="patientPatronymic" sm={2}>
            Отчество (при наличии)
          </Label>
          <Col sm={10}>
            <Input
              id="patientPatronymic"
              name="patronymic"
              placeholder="Введите отчество пациента..."
              type="text"
            ></Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="patientGender" sm={2}>
            Пол (М/Ж)
          </Label>
          <Col sm={10}>
            <Input
              id="patientGender"
              name="gender"
              placeholder="Введите пол пациента..."
              type="text"
            ></Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="patientDateOfB" sm={2}>
            Дата рождения (ДД/ММ/ГГГГ)
          </Label>
          <Col sm={10}>
            <Input id="patientDateOfB" name="dateofb" type="date"></Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="patientCardNumber" sm={2}>
            Номер медицинской карты пациента (2)
          </Label>
          <Col sm={10}>
            <Input
              id="patientCardNumber"
              name="patronymic"
              type="number"
            ></Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={12} className="header">
            Цель исследования
          </Label>
          <Label for="exampleText" sm={2}>
            Причина обращения или диагноз в соответствии с МКБ-10
          </Label>
          <Col sm={10}>
            <Input id="exampleText" name="text" type="textarea" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>
            Первичное/вторичное исследование
          </Label>
          <Col sm={10}>
            <Input id="exampleText" name="text" type="textarea" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>
            Краткий анамнез
          </Label>
          <Col sm={10}>
            <Input id="exampleText" name="text" type="textarea" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>
            Вид рентгенологического исследования
          </Label>
          <Col sm={10}>
            <Input id="exampleText" name="text" type="textarea" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>
            Анатомическая область
          </Label>
          <Col sm={10}>
            <Input id="exampleText" name="text" type="textarea" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={12} className="header">
            Технические особенности рентгенологической диагностической системы
          </Label>
          <Label for="patientPatronymic" sm={2}>
            Наименование медицинского оборудования
          </Label>
          <Col sm={10}>
            <Input
              id="patientPatronymic"
              name="patronymic"
              placeholder="Заполните поле..."
              type="text"
            ></Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="patientPatronymic" sm={2}>
            Протокол исследования
          </Label>
          <Col sm={10}>
            <Input
              id="patientPatronymic"
              name="patronymic"
              placeholder="Заполните поле..."
              type="text"
            ></Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="patientPatronymic" sm={2}>
            Эффективная доза (при наличии)
          </Label>
          <Col sm={10}>
            <Input
              id="patientPatronymic"
              name="patronymic"
              placeholder="Заполните поле..."
              type="text"
            ></Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="patientPatronymic" sm={2}>
            Ограничения визуализации
          </Label>
          <Col sm={10}>
            <Input
              id="patientPatronymic"
              name="patronymic"
              placeholder="Заполните поле..."
              type="text"
            ></Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>
            Примечания
          </Label>
          <Col sm={10}>
            <Input
              id="exampleText"
              name="text"
              type="textarea"
              placeholder="Заполните поле..."
            />
          </Col>
        </FormGroup>
        <FormGroup row className="acid">
          <Label sm={12} className="header">
            Контрастный лекарственный препарат
          </Label>
          <Row>
            <Col md={4}>
              <Label for="patientSurname">
                Пероральный (название, дозировка)
              </Label>
              <Col>
                <Input
                  id="patientSurname"
                  name="surname"
                  placeholder="Заполните поле..."
                  type="text"
                ></Input>
              </Col>
            </Col>
            <Col md={4}>
              <Label for="patientSurname">
                Внутривенный (название, дозировка)
              </Label>
              <Col>
                <Input
                  id="patientSurname"
                  name="surname"
                  placeholder="Заполните поле..."
                  type="text"
                ></Input>
              </Col>
            </Col>
            <Col md={4}>
              <Label for="patientSurname">Аллергическая реакция</Label>
              <Col>
                <Input
                  id="patientSurname"
                  name="surname"
                  placeholder="Заполните поле..."
                  type="text"
                ></Input>
              </Col>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup row>
          <Label sm={12} className="header">
            Подробное описание результатов проведенного рентгенологического
            исследования
          </Label>
          <Col sm={12}>
            <Input
              id="patientSurname"
              name="surname"
              placeholder="Заполните поле..."
              type="textarea"
            ></Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={12} className="header">
            Заключение по результатам рентгенологического исследования (с
            интерпретацией результатов с указанием: стандартизированных шкал
            оценки результатов; рентгенологических признаков: заболеваний
            (болезней), травм, физиологических или патологических состояний,
            врожденных пороков развития, неспецифических изменений, заболеваний
            и состояний, которые позволяют сформировать
            дифференциально-диагностический ряд)
          </Label>
          <Col sm={12}>
            <Input
              id="patientSurname"
              name="surname"
              placeholder="Заполните поле..."
              type="textarea"
            ></Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={12} className="header">
            Рекомендации по дополнительному или контрольному обследованию
          </Label>
          <Col sm={12}>
            <Input
              id="patientSurname"
              name="surname"
              placeholder="Заполните поле..."
              type="textarea"
            ></Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Row>
            <Col md={4}>
              <Label for="patientPatronymic">Дата</Label>
              <Input
                id="patientPatronymic"
                name="patronymic"
                placeholder="Заполните поле..."
                type="date"
              ></Input>
            </Col>
            <Col md={4}>
              <Label for="patientPatronymic">
                Фамилия, имя, отчество (при наличии) медицинского работника
              </Label>
              <Input
                id="patientPatronymic"
                name="patronymic"
                placeholder="Заполните поле..."
                type="text"
              ></Input>
            </Col>
            <Col md={4}>
              <Label for="patientPatronymic">Подпись</Label>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleFile" sm={2}>
            Загрузите файл (при наличии)
          </Label>
          <Col sm={10}>
            <Input id="exampleFile" name="file" type="file" />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col
            sm={{
              offset: 0,
              size: 12,
            }}
          >
            <Button color="primary">Сохранить</Button>
            <Button color="success">Отправить</Button>
            <Button color="danger">Закрыть</Button>
          </Col>
        </FormGroup>
      </Form>
    </Container>
  );
};

export default ProtocolComponent;
