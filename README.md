1.  Создайте на вашем github репозиторий по следующему шаблону HW#-name. Все результаты нужно запушить в ваш репозиторий и прикрепить ссылку на hillel портале.
2.  Создайте README.md с описанием задания.
3.  Создайте index.html в котором подключите js script.
4.  На странице находится input и button и пустой список.
    4.1 Пользователь может ввести что-то в input и нажать на button, после этого в списке ниже должна отобразится строка с тем что было введено в input. Input очищается после нажатия на button.
    4.2 Каждое дело в списке может быть в двух состояниях:

    - нужно сделать - желтый фон
    - сделано - зеленый фон.

      4.3 По умолчанию, дело в список добавляется в статусе нужно сделать. При клике на него, состояние меняется на противоположное. Используйте делегирование событий для обработчиков изменения цвета фона.
      4.4 Добавить в каждую добавленную строку кнопку удалить, при клике на которую элемент удаляется из списка.

_Для решения используем шаблонизацию и делегирование._