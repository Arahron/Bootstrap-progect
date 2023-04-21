import React from 'react'
import { useForm } from "react-hook-form";
import 'leaflet/dist/leaflet.css'
import {
  MapContainer, 
  Marker, 
  Popup, 
  TileLayer,
  Tooltip,
  CircleMarker,
  Polygon
} from 'react-leaflet'

const colorOptions={color:'purple'}
const centerPolygon=[
  [
    [55.927576, 37.996818],
    [55.930510, 38.008353],
    [55.935712, 37.994797],
    [55.928517, 37.996029]
  ]
]


const center=[55.922195, 37.999424]

const Form = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(watch("example")); 
    
    return (
    <div>
    <form id='form' onSubmit={handleSubmit(onSubmit)}>
      <h1>Форма заявки на обратную связь</h1>
      <div className='input-group mb-3'>
         <input
         {...register('lastName',{
            required: true,
            maxLength:50,
            pattern: /^[А-Яа-я]+$/i
         })}
         type="text"
         className='form-control'
         placeholder='Фамилия'/>
      </div>
      {errors?.lastName?.type === 'required'&&(
        <p>Поле обязательно для заполения</p>
      )}
      {errors?.lastName?.type === 'maxLength'&&(
        <p>Поле не может содержать более 50 символов</p>
      )}
      {errors?.lastName?.type === 'pattern'&&(
        <p>Поле заполнено некорректно</p>
      )}
      {errors.exampleRequired && <span>This field is required</span>}
      



      <div className='input-group mb-3'>
         <input
         {...register('firstName',{
            required: true,
            maxLength:50,
            pattern: /^[А-Яа-я]+$/i
         })}
         type="text"
         className='form-control'
         placeholder='Имя'/>
      </div>
      {errors?.firstName?.type === 'required'&&(
        <p>Поле обязательно для заполения</p>
      )}
      {errors?.firstName?.type === 'maxLength'&&(
        <p>Поле не может содержать более 50 символов</p>
      )}
      {errors?.firstName?.type === 'pattern'&&(
        <p>Поле заполнено некорректно</p>
      )}
      {errors.exampleRequired && <span>This field is required</span>}

      
      <div className='input-group mb-3'>
         <input
         {...register('middlelName',{
            required: true,
            maxLength:50,
            pattern: /^[А-Яа-я]+$/i
         })}
         type="text"
         className='form-control'
         placeholder='Отчество'/>
      </div>
      {errors?.middlelName?.type === 'required'&&(
        <p>Поле обязательно для заполения</p>
      )}
      {errors?.middlelName?.type === 'maxLength'&&(
        <p>Поле не может содержать более 50 символов</p>
      )}
      {errors?.middlelName?.type === 'pattern'&&(
        <p>Поле заполнено некорректно</p>
      )}
      {errors.exampleRequired && <span>This field is required</span>}

        
      <div className='input-group mb-3'>
         <input
         {...register('email',{
            required: true,
            maxLength:50,
            pattern: /^[A-Za-z@.-_]+$/i
         })}
         type="text"
         className='form-control'
         placeholder='Email'/>
      </div>
      {errors?.email?.type === 'required'&&(
        <p>Поле обязательно для заполения</p>
      )}
      {errors?.email?.type === 'pattern'&&(
        <p>Поле заполнено некорректно</p>
      )}
      {errors.exampleRequired && <span>This field is required</span>}

      <div>
      <input className='btn btn-outline-primary' type="submit" />
      </div>
      

    </form>

<br></br>

    <MapContainer
    center={center}
    zoom={10}
    style={{
      width:'100vw',
      height:"500px"
    }}
    >
      <TileLayer
      url='https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=v4mrE7GwQX4Xyozbu5hL'
      attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />

      <CircleMarker
      center={center}
      pathOptions={{color: 'black'}}
      radious={10}
      />
      

      <Marker position={center}>
        <Popup>
          Мы находимся тут
        </Popup>
        <Tooltip>При наведении</Tooltip>
      </Marker>
      <Polygon positions={centerPolygon} pathOptions={colorOptions}/>
    </MapContainer>
   </div>
  )
}

export default Form