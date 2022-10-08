import React, { Fragment } from 'react';
import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import {
  Row,
  Card,
  CardBody,
  Input,
  CardTitle,
  FormGroup,
  Label,
  CustomInput,
  Button,
  FormText,
  Form,
} from 'reactstrap';
import { injectIntl } from 'react-intl';

import 'react-tagsinput/react-tagsinput.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'rc-switch/assets/index.css';
import 'rc-slider/assets/index.css';
import 'react-rater/lib/react-rater.css';

const BlankPage = ({ match, intl }) => {
  const { messages } = intl;

  return (
    <>
      <>
        <Row>
          <Colxx xxs="12">
            <Breadcrumb heading="menu.form-layouts" match={match} />
            <Separator className="mb-5" />
          </Colxx>
        </Row>
        <Row className="mb-4">
          <Colxx xxs="12">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="forms.basic" />
                </CardTitle>
                <Form>
                  <FormGroup>
                    <Label for="exampleEmail">
                      <IntlMessages id="forms.email" />
                    </Label>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder={messages['forms.email']}
                    />
                    <FormText color="muted">
                      <IntlMessages id="forms.email-muted" />
                    </FormText>
                  </FormGroup>

                  <FormGroup>
                    <Label for="passwordBasic">
                      <IntlMessages id="forms.password" />
                    </Label>
                    <Input
                      type="password"
                      name="passwordBasic"
                      id="passwordBasic"
                      placeholder={messages['forms.password']}
                    />
                  </FormGroup>

                  <FormGroup>
                    <CustomInput
                      type="checkbox"
                      id="exampleCustomCheckbox"
                      label="Check this custom checkbox"
                    />
                  </FormGroup>

                  <Button color="primary" className="mt-4">
                    <IntlMessages id="forms.proceeds" />
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Colxx>
        </Row>
      </>
      <>
        <Row>
          <Colxx xxs="12">
            <Breadcrumb heading="menu.form-layouts" match={match} />
            <Separator className="mb-5" />
          </Colxx>
        </Row>
        <Button style={{ position: 'absolute', right: '45px', zIndex: 10 }}>
          Add new Filter
        </Button>
        <Row className="mb-4">
          <Colxx xxs="12">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="forms.basic" />
                </CardTitle>
                <Form>
                  <FormGroup>
                    <Label for="exampleEmail">
                      <IntlMessages id="forms.email" />
                    </Label>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder={messages['forms.email']}
                      disabled
                    />
                    <FormText color="muted">
                      <IntlMessages id="forms.email-muted" />
                    </FormText>
                  </FormGroup>

                  {/* <FormGroup>
                    <Label for="passwordBasic">
                      <IntlMessages id="forms.password" />
                    </Label>
                    <Input
                      type="password"
                      name="passwordBasic"
                      id="passwordBasic"
                      placeholder={messages['forms.password']}
                    />
                  </FormGroup> */}

                  <FormGroup>
                    <CustomInput
                      type="checkbox"
                      id="exampleCustomCheckbox"
                      label="Check this custom checkbox"
                    />
                  </FormGroup>

                  <Button color="primary" className="mt-4">
                    <IntlMessages id="forms.proceeds" />
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Colxx>
        </Row>
      </>
    </>
  );
};

export default injectIntl(BlankPage);
