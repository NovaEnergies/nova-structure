/*
@Title("Настройка прав для ролей")
@Description("Изменение состояния чекбоксов на пересечениях столбцов-ролей и строк-прав")
@Feature("Permissions")
@Tags({@Tag("web"), @Tag("permissions")})
@Preconditions("Авторизоваться в системе в роли Power user")
test userPermissionsEditAndSave() {
    step("Перейти на вкладку Permissions");
    step("Нажать на чекбоксы в таблице и изменить их состояние");
    step("Нажать кнопку Save");
    expect("Изменённые состояния чекбоксов применены и сохранены");
}

test userPermissionsEditAndCancel() {
    step("Перейти на вкладку Permissions");
    step("Нажать на чекбоксы в таблице и изменить их состояние");
    step("Нажать кнопку Cancel");
    expect("Изменённые состояния чекбоксов восстановлены к исходным");
}
*/