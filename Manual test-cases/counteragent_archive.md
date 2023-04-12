/*
@Title("Архивация контрагента")
@Description("Архивация контрагента и просмотр списка заархивированных контрагентов")
@Feature("Контрагенты")
@Tags({@Tag("web"), @Tag("counteragents")})
@Preconditions("Авторизоваться в системе в роли Power user")
test counteragentArchived() {
    step("Перейти на вкладку Counteragents");
    step("Нажать кнопку Archive в строке контрагента");
    expect("Контрагент заархивирован и больше не отображается в таблице");
}

test counteragentShowArchived() {
    step("Перейти на вкладку Counteragents");
    step("Нажать чекбокс Show archived");
    expect("Отображается таблица с заархивированными контрагентами");
}
*/
