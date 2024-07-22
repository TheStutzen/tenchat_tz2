# Приложение для управления пользователями

## Описание

Приложение позволяет создавать и управлять пользователями. Оно предоставляет возможность регистрации новых пользователей, авторизации существующих и изменения данных пользователя.

## Требования

Для запуска приложения необходимо иметь установленный [Docker](https://www.docker.com/).

## Установка и запуск

1. Склонируйте репозиторий с приложением:

   ```bash
   git clone https://github.com/TheStutzen/tenchat_tz2.git
   ```

2. Перейдите в директорию с приложением:

   ```bash
   cd tenchat_tz2
   ```

3. Запустите Docker Compose для создания и запуска контейнеров:

   ```bash
   docker compose up
   ```

   Эта команда запустит приложение.

4. После успешного запуска приложение будет доступно по адресу http://localhost:3000. (Так-же есть документация swagger доступная по адресу: http://localhost:3000/swagger)

5. В терминале docker нужно выполнить команду 

    ```bash
    npm run migrate
    ```

 для выполнения миграция с пользователями

## Использование

После запуска приложения и выполненой миграции вы можете использовать следующие возможности:

- Регистрация нового пользователя
- Поиск по ID пользователья
- Изменение данных пользователя
- Пополнение и списание баланса

## Остановка и удаление контейнеров

Чтобы остановить и удалить контейнеры, выполните следующую команду:

```bash
docker compose down
```

Эта команда остановит и удалит все созданные контейнеры.

## Поддержка

Если у вас возникли проблемы с использованием приложения, пожалуйста, создайте новый вопрос на нашем [форуме](https://forum.example.com).

## Лицензия

Это приложение распространяется по лицензии MIT. Подробнее о лицензии см. в файле [LICENSE](LICENSE).

## Авторы

- [Ваше имя](https://github.com/TheStutzen) - разработка приложения
- [Ваше имя](https://github.com/TheStutzen) - разработка документации

## Ссылки

- [Docker](https://www.docker.com/)
- [Sequelize](https://sequelize.org/)
- [PostgreSQL](https://www.postgresql.org/)