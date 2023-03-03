/*
@Title("Архивация проекта")
@Description("Архивация проекта и просмотр списка заархивированных проектов")
@Feature("Проекты")
@Tags({@Tag("web"), @Tag("projects")})
@Preconditions("Авторизоваться в системе в роли Power user")
test projectArchived() {
    step("Перейти на вкладку Projects");
    step("Нажать кнопку Archive в строке проекта");
    step("Ожидаемый результат: проект заархивирован и больше не отображается в таблице");
}

test projectShowArchived() {
    step("Перейти на вкладку Projects");
    step("Нажать чекбокс Show archived");
    step("Ожидаемый результат: отображается таблица с заархивированными проектами");
}
*/
