/*
@Title("Архивация контрагента")
@Description("Архивация контрагента и просмотр списка заархивированных контрагентов")
@Feature("Контрагенты")
@Tags({@Tag("web"), @Tag("counteragents")})
@Preconditions("Авторизоваться в системе в роли Power user")
test counteragentArchived() {
    step("Перейти на вкладку Counteragents");
    step("Нажать кнопку Archive в строке контрагента");
    step("Ожидаемый результат: контрагент заархивирован и больше не отображается в таблице");
}

test counteragentShowArchived() {
    step("Перейти на вкладку Counteragents");
    step("Нажать чекбокс Show archived");
    step("Ожидаемый результат: отображается таблица с заархивированными контрагентами");
}
*/
