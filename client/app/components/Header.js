"use client"
import { Avatar, SearchField, Button, Dropdown, Label } from "@heroui/react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="p-[.1rem] w-[95%] md:w-60/100 mt-5 bg-linear-to-t from-[#151e2f] to-stone-700 rounded-3xl mx-auto">
      <header className="flex flex-col md:flex-row justify-between items-center bg-[#151e2f] p-4 md:p-5 rounded-3xl dark gap-4">
        <Link href={'/'} className="font-semibold text-2xl">
          <p>S/ES</p>
        </Link>
        <nav className="flex">
          <ul className="flex gap-2">
            <li>
              <Link
                href="/"
                className="font-medium p-3 duration-300 ease-in-out hover:bg-indigo-900 rounded-xl"
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                href="/estruturas"
                className="font-medium p-3 duration-300 ease-in-out hover:bg-indigo-900 rounded-xl"
              >
                Estruturas
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="font-medium p-3 duration-300 ease-in-out hover:bg-indigo-900 rounded-xl"
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
        <div className="dark w-full md:w-auto">
          <SearchField name="search" className="w-full">
            <SearchField.Group className="w-full">
              <SearchField.SearchIcon />
              <SearchField.Input className="w-full md:w-50" placeholder="Buscar..." />
              <SearchField.ClearButton />
            </SearchField.Group>
          </SearchField>
        </div>
        {/*<div className="flex ">
          <Dropdown>
            <Button className='p-0'>
              <Avatar className="size-14">
                <Avatar.Image
                  alt="Francisco Entony"
                  src="/avatar.JPG"
                />
                <Avatar.Fallback>FE</Avatar.Fallback>
              </Avatar>
            </Button>
            <Dropdown.Popover className='dark'>
              <Dropdown.Menu
                onAction={(key) => console.log(`Selected: ${key}`)}
              >
                <Dropdown.Item id="new-file" textValue="New file">
                  <Label>New file</Label>
                </Dropdown.Item>
                <Dropdown.Item id="copy-link" textValue="Copy link">
                  <Label>Copy link</Label>
                </Dropdown.Item>
                <Dropdown.Item id="edit-file" textValue="Edit file">
                  <Label>Edit file</Label>
                </Dropdown.Item>
                <Dropdown.Item
                  id="delete-file"
                  textValue="Delete file"
                  variant="danger"
                >
                  <Label>Delete file</Label>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Popover>
          </Dropdown>
        </div>*/}
      </header>
    </div>
  );
}
