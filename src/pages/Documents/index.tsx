import React, { useState } from 'react';
import {
  Progress,
  CustomInput,
  Table,
  Card,
  CardBody,
  Row,
  Col,
  DropdownToggle,
  ButtonDropdown
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import InlineSVG from 'react-inlinesvg';

import uploadFile from '../../../public/images/upload_file.svg';
import uploadFolder from '../../../public/images/upload_folder.svg';
import folderSVG from '../../../public/images/folder.svg';

const data = [1, 2, 3, 4, 5, 6];

const Documents = () => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <div>
      <h1 className="m-t-40 m-b-0">My Documents</h1>
      <Card className="m-t-40">
        <Row noGutters={true}>
          <Col xs="10">
            <Table>
              <thead>
                <tr>
                  <th style={{width: '50px'}}>
                    <CustomInput type="checkbox" id="" label="" />
                  </th>
                  <th>Document</th>
                  <th>Last Edited</th>
                  <th>Signed</th>
                  <th>Permission</th>
                  <th>Size</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => {
                  return (
                    <tr key={`table-row-key${index}`}>
                      <th scope="row">
                        <CustomInput type="checkbox" id="" label="" />
                      </th>
                      <td>
                        <FontAwesomeIcon icon={faFile} className="m-r-10" /> NDA1.docx
                      </td>
                      <td>12 min ago</td>
                      <td>-</td>
                      <td>Only you</td>
                      <td>88KB</td>
                      <td>...</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
          <Col xs="2">
            <div className="actions">
              <div className="doc-preview" />
              <ButtonDropdown
                toggle={toggle}
                isOpen={dropdownOpen}
                style={{ marginBottom: '20px' }}
              >
                <DropdownToggle caret={true} color="primary">
                  Сreate
                </DropdownToggle>
              </ButtonDropdown>
              <div className="action-items">
                <div className="item">
                  <div className="icon">
                    <InlineSVG src={uploadFile} />
                  </div>
                  <span>Upload Files</span>
                </div>
                <div className="item">
                  <div className="icon">
                    <InlineSVG src={uploadFolder} />
                  </div>
                  <span>Upload Folder</span>
                </div>
                <div className="item">
                  <div className="icon">
                    <InlineSVG src={folderSVG} />
                  </div>
                  <span>New Folder</span>
                </div>
                <div className="item">
                  <div className="icon">
                    <InlineSVG src={folderSVG} />
                  </div>
                  <span>New Shared Folder</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Card>

      <Card className="m-t-40">
        <CardBody>
          <Row>
            <Col><b>Storage Remaining</b></Col>
            <Col className="text-right">
              <b style={{color: '#2896cc'}}>190 MB</b> out of 2 GB used
            </Col>
          </Row>
          <Progress className="m-t-20" value={30} />
        </CardBody>
      </Card>
    </div>
  );
};

export default Documents;
