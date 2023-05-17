import { ListSessionStyled } from './ListSession.styled';
import { Col, Row, Select, Spin } from 'antd';
import { Status } from '../../models/status.model';
import { RootState } from '../../redux/app/store';
import { SessionCard } from './components/SesssionCard';
import { useCallback, useEffect, useState } from 'react';
import { getSessions } from '../../redux/home';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { ShortTitle } from '../../models/shortTitle.model';

export const ListSession = () => {
  //Const
  const statuses = Object.values(Status).map((s) => ({
    value: s,
    label: s.toUpperCase()
  }));

  const shortTitles = Object.values(ShortTitle).map((s) => ({
    value: s,
    label: s
  }));

  //State
  const isLoading = useAppSelector((state: RootState) => state.home.isLoading);
  const sessions = useAppSelector((state: RootState) => state.home.sessions);
  const dispatch = useAppDispatch();
  const [form, setForm] = useState<{ shortTitle?: ShortTitle; status?: Status }>({
    shortTitle: undefined,
    status: undefined
  });

  //Event
  useEffect(() => {
    dispatch(getSessions({ ...form }));
  }, [dispatch, form, form.shortTitle, form.status]);

  const onChangeTitle = useCallback(
    (value: ShortTitle) => {
      setForm({ ...form, shortTitle: value });
    },
    [form]
  );

  const onChangeStatus = useCallback(
    (value?: Status) => {
      setForm({ ...form, status: value });
    },
    [form]
  );

  return (
    <ListSessionStyled>
      <div className="filter-group">
        <Select
          style={{ width: 200 }}
          value={form.shortTitle}
          onChange={(e) => onChangeTitle(e)}
          placeholder="Select short title"
          options={shortTitles}
        />
        <Select
          className="select-status"
          placeholder="Select status"
          value={form.status}
          onChange={(e) => onChangeStatus(e)}
          style={{ width: 200 }}
          options={statuses}
        />
      </div>
      {isLoading ? (
        <div className="loading">
          <Spin />
        </div>
      ) : (
        <Row gutter={[24, 24]}>
          {sessions.map((s) => (
            <Col key={s.id} xs={24} sm={12} md={8} lg={6} xl={6}>
              <SessionCard
                title={s.program[0].display_title}
                image={s.program[0].thumbnail_img_url}
                startDate={s.start_date}
                endDate={s.end_date}
              />
            </Col>
          ))}
        </Row>
      )}
    </ListSessionStyled>
  );
};
