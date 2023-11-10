export const ROLE = {
  TEACHER: 52,
  GUEST: 999999,
};

export const DOCUMENT_FILE_TYPE = {
  GAME: '1',
  IMAGE: '3',
  AUDIO: '2',
  VIDEO: '4',
};
export const PACKAGES = {
  LV1: 1,
  LV2: 2,
  LV3: 3,
};

export const DOCUMENT_FILE_IMAGE = {
  1: './assets/icon-lesson/Game.svg',
  3: './assets/icon-lesson/Image.svg',
  2: './assets/icon-lesson/Audio.svg',
  4: './assets/icon-lesson/Video.svg',
};
export const REGEX_PN =
  '(0([3|5|7|8|9]|21|22|23|24|25|26|27|28|29|2))+([0-9]{8})\\b';

export const EMAIL_TRANING = 'training@kidsenglish.vn';
export const DAYOFWEEK_VI = [
  {
    key: 2,
    value: 'Thứ Hai',
  },
  {
    key: 3,
    value: 'Thứ Ba',
  },
  {
    key: 4,
    value: 'Thứ Tư',
  },
  {
    key: 5,
    value: 'Thứ Năm',
  },
  {
    key: 6,
    value: 'Thứ Sáu',
  },
  {
    key: 7,
    value: 'Thứ Bảy',
  },
  {
    key: 8,
    value: 'Chủ Nhật',
  },
];

export const DAYOFWEEK_EN = [
  {
    key: 2,
    value: 'Monday',
  },
  {
    key: 3,
    value: 'Tuesday',
  },
  {
    key: 4,
    value: 'Wednesday',
  },
  {
    key: 5,
    value: 'Thursday',
  },
  {
    key: 6,
    value: 'Friday',
  },
  {
    key: 7,
    value: 'Saturday',
  },
  {
    key: 8,
    value: 'Sunday',
  },
];
export const AVATAR_CLASS = {
  1: '018-girl-9.svg',
  2: '035-boy-15.svg',
  3: '014-girl-7.svg',
};
export const AKITA_STORE = {
  PROVINCE: 0,
  ROLE: 1,
  LEVEL: 2,
  YEAR: 3,
  DOCUMENT_TYPE: 4,
  POSITION: 5,
  GAME_TYPE: 6,
  NEW_TYPE: 7,
  FEEDBACK_TYPE: 8,
  TICKET_TYPE: 9,
  NOTIFICATION_TYPE: 10,
  DISTRICT: 11,
  WARD: 12,
  TOPIC_SKILL_RATE_TYPES: 14,
};

export const ALERT_SINGLE_LOGIN = {
  vi: 'Tài khoản của bạn đang được truy cập bởi thiết bị khác!',
  en: 'Your account is being accessed by another device!',
};
export const STATUS_CODE = {
  SUCCESS: 200,
  UNAUTHORIZED: 401,
  ERROR: 500,
};

export const MODAL_TYPE = {
  default: 0,
  deleteConfirmation: 1,
  confirmation: 2,
};

export const MODAL_STYLE = {
  default: 'modal-style-primary',
  deleteConfirmation: 'modal-style-danger',
  confirmation: 'modal-style-primary',
};

export const MODAL_BUTTON_STYLE = {
  default: 'btn-primary',
  deleteConfirmation: 'btn-danger',
  confirmation: 'btn-primary',
};
export const EVALUATE_LESSON_TEMPLATE = [
  {
    name: 'O',
    titleEn: 'Outstanding',
    titleVi: 'Xuất sắc',
    key: 1,
  },
  {
    name: 'S',
    titleEn: 'Satisfactory',
    key: 2,
    titleVi: 'Tốt/Khá',
  },
  {
    name: 'N',
    titleEn: 'Need Improvements',
    key: 3,
    titleVi: 'Cần nỗ lực hơn',
  },
];

export const DATA_SKILL_LESSON = [
  {
    skillName: '',
    nameVi: 'Chăm chú nghe giảng',
    nameEn: 'Listen carefully',
    key: 'listenCarefully',
  },
  {
    skillName: '',
    nameVi: 'Tập trung vào bài học',
    nameEn: 'Stay on task',
    key: 'stayOnTask',
  },
  {
    skillName: '',
    nameVi: 'Theo kịp bài học',
    nameEn: 'Follow lesson',
    key: 'followLesson',
  },
  {
    skillName: '',
    nameVi: 'Hòa đồng với bạn bè',
    nameEn: 'Treat others with respect',
    key: 'respect',
  },
  {
    skillName: '',
    nameVi: 'Tuân thủ nội quy lớp',
    nameEn: 'Follow class’s rules',
    key: 'followRule',
  },
  {
    skillName: '',
    nameVi: 'Nỗ lực học tập',
    nameEn: 'Do his/her best work',
    key: 'needImprovement',
  },
];
