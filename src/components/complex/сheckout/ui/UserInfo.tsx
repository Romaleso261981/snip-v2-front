import Button from "@/components/ui/Button";
import { CheckOutContext } from "@/contexts/checkOutContext";
import React, { FC, useContext, useState, ChangeEvent } from "react";

const UserInfo: FC = () => {
  const [isShowInfAboutClient, setIsShowInfAboutClient] = useState(true);
  const [userData, setUserData] = useState({
    name: "",
    surname: "",
    phone: "",
    email: ""
  });

  const { setUser, checkOutContext } = useContext(CheckOutContext);

  console.log("checkOutContext", checkOutContext);

  const handleChangeField = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    setUser(userData);
  };

  const toggleShowAboutClient = () => {
    setIsShowInfAboutClient(!isShowInfAboutClient);
  };

  return (
    <div>
      <h3 className="text-gold text-sm font-bold pt-3 pb-6">
        Ваші контактні дані
      </h3>
      <div className="flex flex-col gap-4">
        {isShowInfAboutClient
          ? <div className="grid grid-cols-1 gap-4 justify-start md:grid-cols-2">
              <div>
                <label
                  className="block text-gold text-sm font-bold mb-2 mt-3"
                  htmlFor="phone"
                >
                  Номер телефону
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  type="text"
                  value={userData.phone}
                  name="phone"
                  onChange={handleChangeField}
                  placeholder="Введіть номер телефону"
                />
              </div>
              <div>
                <label
                  className="block text-gold text-sm font-bold mb-2 mt-3"
                  htmlFor="surname"
                >
                  Прізвище
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="surname"
                  type="text"
                  value={userData.surname}
                  name="surname"
                  onChange={handleChangeField}
                  placeholder="Введіть прізвище"
                />
              </div>
              <div>
                <label
                  className="block text-gold text-sm font-bold mb-2 mt-3"
                  htmlFor="email"
                >
                  Електронна пошта
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  value={userData.email}
                  name="email"
                  onChange={handleChangeField}
                  placeholder="Введіть електронну пошту"
                />
              </div>
              <div>
                <label
                  className="block text-gold text-sm font-bold mb-2 mt-3"
                  htmlFor="name"
                >
                  Ім&apos;я
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  value={userData.name}
                  name="name"
                  onChange={handleChangeField}
                  placeholder="Введіть ім'я"
                />
              </div>
              <div
                className="flex justify-start"
                onClick={toggleShowAboutClient}
              >
                <Button>Згорнути</Button>
              </div>
            </div>
          : <div className="max-w-fit border border-gold p-3 overflow-hidden">
              <h3>Данні про клієнта</h3>
              <div className="flex flex-row ">
                <div className="flex flex-row pb-3">
                  <div className="flex flex-col mr-14">
                    <span>Ім&apos;я:</span>
                    <span>Прізвище:</span>
                    <span>Телефон:</span>
                    <span>Email:</span>
                  </div>
                  <div className="flex flex-col">
                    <span>
                      {userData.name || "Василь"}
                    </span>
                    <span>
                      {userData.surname || "Васильов"}
                    </span>
                    <span>
                      {userData.phone || "380123456789"}
                    </span>
                    <span>
                      {userData.email || "example@gmail.com"}
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="flex justify-start"
                onClick={toggleShowAboutClient}
              >
                <Button>Розгорнути</Button>
              </div>
            </div>}
      </div>
    </div>
  );
};

export default UserInfo;
