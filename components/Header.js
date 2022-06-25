import Link from 'next/link';
import React from 'react';
import { Dropdown, Button, Avatar, Text } from "@nextui-org/react";
import { FaBell } from 'react-icons/fa';
import styles from '../styles/Header.module.css';

const Header = () => {
  const menuItems = [
    { key: "new", name: "New File" },
    { key: "copy", name: "Copy Link" },
    { key: "edit", name: "Edit File" },
    { key: "delete", name: "Delete File" },
  ];
  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <Link href="/">Quizlet</Link>
      </div>

      <div className={styles.header__left}>
        <div className={styles.header__left__home}>
          <Link href="/">Trang chủ</Link>
        </div>
        <div className={styles.header__left__introduce}>
          <Link href="/">Lời giải của sách giáo khoa</Link>
        </div>
        <Dropdown>
          <Dropdown.Button color='default' light>
            <p className={styles.header__left__library}>Thư viện của bạn</p>
          </Dropdown.Button>
          <Dropdown.Menu
            color='default'
            variant="light"
            aria-label="Actions"
          >
            <Dropdown.Item key="new">New file</Dropdown.Item>
            <Dropdown.Item key="copy">Copy link</Dropdown.Item>
            <Dropdown.Item key="edit">Edit file</Dropdown.Item>
            <Dropdown.Item key="delete" color="error" withDivider>
              Delete file
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Button flat>Tạo</Dropdown.Button>
          <Dropdown.Menu aria-label="Dynamic Actions" items={menuItems}>
            {(item) => (
              <Dropdown.Item
                key={item.key}
                color={item.key === "delete" ? "error" : "default"}
              >
                {item.name}
              </Dropdown.Item>
            )}
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className={styles.header__right}>
        <Button>Nâng cấp: dùng thử miễn phí 7 ngày</Button>
        <Dropdown placement="bottom-left">
          <Dropdown.Trigger>
            <div className={styles.button__notification}>
              <FaBell />
            </div>

          </Dropdown.Trigger>
          <Dropdown.Menu color="secondary" aria-label="Avatar Actions">
            <Dropdown.Item key="profile" css={{ height: "$18" }}>
              <Text b color="inherit" css={{ d: "flex" }}>
                Signed in as
              </Text>
              <Text b color="inherit" css={{ d: "flex" }}>
                zoey@example.com
              </Text>
            </Dropdown.Item>
            <Dropdown.Item key="settings" withDivider>
              My Settings
            </Dropdown.Item>
            <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
            <Dropdown.Item key="analytics" withDivider>
              Analytics
            </Dropdown.Item>
            <Dropdown.Item key="system">System</Dropdown.Item>
            <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
            <Dropdown.Item key="help_and_feedback" withDivider>
              Help & Feedback
            </Dropdown.Item>
            <Dropdown.Item key="logout" color="error" withDivider>
              Log Out
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown placement="bottom-left">
          <Dropdown.Trigger>
            <Avatar
              bordered
              size="md"
              as="button"
              color="secondary"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </Dropdown.Trigger>
          <Dropdown.Menu color="secondary" aria-label="Avatar Actions">
            <Dropdown.Item key="profile" css={{ height: "$18" }}>
              <Text b color="inherit" css={{ d: "flex" }}>
                Signed in as
              </Text>
              <Text b color="inherit" css={{ d: "flex" }}>
                zoey@example.com
              </Text>
            </Dropdown.Item>
            <Dropdown.Item key="settings" withDivider>
              My Settings
            </Dropdown.Item>
            <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
            <Dropdown.Item key="analytics" withDivider>
              Analytics
            </Dropdown.Item>
            <Dropdown.Item key="system">System</Dropdown.Item>
            <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
            <Dropdown.Item key="help_and_feedback" withDivider>
              Help & Feedback
            </Dropdown.Item>
            <Dropdown.Item key="logout" color="error" withDivider>
              Log Out
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  )
}

export default Header